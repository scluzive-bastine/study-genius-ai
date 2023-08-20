import { NextResponse } from 'next/server'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { content } = body

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create()
    const pageWidth = 595.28
    const pageHeight = 841.89 // Increase page height for longer text

    const textOptions = {
      x: 50,
      size: 12,
      color: rgb(0, 0, 0),
    }

    // Split the content into paragraphs or lines as needed
    const lines = content.split('\n') // Split by lines, adjust as needed

    let currentPage = pdfDoc.addPage([pageWidth, pageHeight])
    let currentY = pageHeight - 50 // Start y-position

    // Font setup
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Iterate through lines and add them to pages
    for (const line of lines) {
      const words = line.split(' ')
      let currentLine = words[0]

      for (let i = 1; i < words.length; i++) {
        const testLine = currentLine + ' ' + words[i]
        const width = font.widthOfTextAtSize(testLine, textOptions.size)

        if (width < pageWidth - 100) {
          currentLine = testLine
        } else {
          currentPage.drawText(currentLine, { ...textOptions, y: currentY })
          currentY -= 20 // Adjust line spacing
          currentLine = words[i]
        }
      }

      // Draw the remaining part of the line
      currentPage.drawText(currentLine, { ...textOptions, y: currentY })
      currentY -= 20 // Adjust line spacing

      if (currentY <= 50) {
        // Move to the next page
        currentPage = pdfDoc.addPage([pageWidth, pageHeight])
        currentY = pageHeight - 50
      }
    }

    const pdfBytes = await pdfDoc.save()

    // Set response headers for downloading the PDF
    const filename = 'note_assistant_response.pdf'
    const headers = {
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Type': 'application/pdf',
    }

    return new NextResponse(pdfBytes, { headers })
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
